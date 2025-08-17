import { ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HelpCenter = () => {
  const { t } = useLanguage();

  const helpTopics = [
    {
      title: "Getting Started",
      articles: [
        "How to download and install UseVerdant",
        "Creating your first plant scan",
        "Understanding scan results",
        "Setting up your profile"
      ]
    },
    {
      title: "Plant Identification",
      articles: [
        "Tips for better photo quality",
        "What to do if identification is wrong",
        "Understanding confidence scores",
        "Identifying rare or exotic plants"
      ]
    },
    {
      title: "Account & Settings",
      articles: [
        "Managing your account",
        "Privacy settings",
        "Notification preferences",
        "Deleting your account"
      ]
    },
    {
      title: "Troubleshooting",
      articles: [
        "App crashes or won't open",
        "Camera not working",
        "Sync issues",
        "Performance problems"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container-width py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t('Home')}
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gradient mb-6">Help Center</h1>
          
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {helpTopics.map((topic, index) => (
              <div key={index} className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
            <Link to="/contact" className="hero-button inline-block px-6 py-3 rounded-lg">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;