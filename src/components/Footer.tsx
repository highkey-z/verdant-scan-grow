import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const footerLinks = {
    company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" }
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Bug Report", href: "#" },
      { label: "Feature Request", href: "#" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" }
    ],
    social: [
      { label: "Twitter", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "YouTube", href: "#" }
    ]
  };

  return (
    <footer className="bg-gradient-to-t from-nature-mint/10 to-background border-t border-border/50">
      <div className="container-width py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-success flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">UseVerdant</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Identify any plant instantly with AI-powered scanning. Perfect for nature lovers, gardeners, and students.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@useverdant.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('Company')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('Support')}</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('Legal')}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('Follow Us')}</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="nature-card p-6 mb-12">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">{t('Stay Updated')}</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              {t('Get notified about new features, plant care tips, and app updates')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('Enter your email')}
                className="flex-1 px-4 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="hero-button px-6 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                {t('Subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © 2024 UseVerdant. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>{t('Made with')}</span>
            <Leaf className="w-4 h-4 text-success" />
            <span>{t('for plant lovers everywhere')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;