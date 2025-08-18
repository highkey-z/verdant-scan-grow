import { ArrowLeft, Search, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const HelpCenter = () => {
  const { t } = useLanguage();
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const helpTopics = [
    {
      title: "Getting Started",
      articles: [
        {
          title: "How to download and install UseVerdant",
          content: "UseVerdant is available for download on both iOS and Android devices. Visit the App Store or Google Play Store, search for 'UseVerdant', and tap 'Install'. The app is free to download with optional premium features available through in-app purchases. Make sure your device has iOS 12.0+ or Android 7.0+ for optimal performance."
        },
        {
          title: "Creating your first plant scan",
          content: "To scan a plant, open the UseVerdant app and tap the camera button. Point your camera at the plant, making sure the entire plant or leaf is visible in the frame. Tap the capture button or simply hold your phone steady - the AI will automatically detect and identify the plant. For best results, ensure good lighting and capture the plant from multiple angles if the first scan isn't accurate."
        },
        {
          title: "Understanding scan results",
          content: "After scanning, UseVerdant displays the plant's name, scientific classification, and care information. The confidence score shows how certain the AI is about the identification (90%+ is very reliable). You'll also see similar plants, care tips, and interesting facts. If you disagree with the result, you can report it to help improve our AI accuracy."
        },
        {
          title: "Setting up your profile",
          content: "Create your UseVerdant profile by tapping the profile icon and selecting 'Sign Up'. You can register with email or social media accounts. A profile allows you to save your plant discoveries, track your scanning history, sync across devices, and access premium features. Your data is encrypted and secure."
        }
      ]
    },
    {
      title: "Plant Identification",
      articles: [
        {
          title: "Tips for better photo quality",
          content: "For accurate plant identification: 1) Use natural lighting when possible, 2) Capture the entire leaf or flower clearly, 3) Avoid blurry or pixelated images, 4) Include multiple parts of the plant if possible, 5) Clean the camera lens before scanning, 6) Hold the phone steady while capturing. The AI works best with clear, well-lit photos showing distinctive plant features."
        },
        {
          title: "What to do if identification is wrong",
          content: "If UseVerdant misidentifies a plant, you can: 1) Try scanning from a different angle, 2) Capture a different part of the plant (leaf, flower, bark), 3) Use the 'Report Error' feature to help improve our AI, 4) Consult with plant experts in our community forum, 5) Check the 'Similar Plants' section for alternative matches. Your feedback helps make UseVerdant more accurate for everyone."
        },
        {
          title: "Understanding confidence scores",
          content: "Confidence scores indicate how certain our AI is about the identification: 95-100% = Extremely confident, 85-94% = Very confident, 70-84% = Moderately confident, Below 70% = Low confidence. Higher scores generally mean more accurate results. If you get a low confidence score, try taking another photo from a different angle or of a different part of the plant."
        },
        {
          title: "Identifying rare or exotic plants",
          content: "UseVerdant's database includes over 10,000 plant species, including many rare and exotic varieties. However, very rare plants might not be recognized. For exotic plants: 1) Try capturing unique features like flowers or distinctive leaves, 2) Check if the plant is in our 'Rare Plants' category, 3) Use the community feature to ask expert botanists, 4) Consider geographical location when interpreting results."
        }
      ]
    },
    {
      title: "Account & Settings",
      articles: [
        {
          title: "Managing your account",
          content: "Access your account settings by tapping the profile icon, then 'Settings'. Here you can: update your email and password, manage notification preferences, view your subscription status, download your data, sync settings across devices, and delete your account if needed. Changes are saved automatically and synced to all your devices."
        },
        {
          title: "Privacy settings",
          content: "UseVerdant prioritizes your privacy. In Privacy Settings, you can: control what data is shared, manage location tracking preferences, choose whether to contribute anonymous scan data to improve our AI, opt out of marketing communications, and control social sharing features. We never sell your personal data to third parties."
        },
        {
          title: "Notification preferences",
          content: "Customize your notifications in Settings > Notifications. You can enable/disable: plant care reminders, weekly plant discovery emails, app update notifications, community activity alerts, and promotional offers. Push notifications can be managed through your device's system settings as well."
        },
        {
          title: "Deleting your account",
          content: "To delete your UseVerdant account: 1) Go to Settings > Account > Delete Account, 2) Confirm your decision by entering your password, 3) Choose whether to download your data first, 4) Tap 'Permanently Delete Account'. This action cannot be undone and will remove all your scan history, saved plants, and account data."
        }
      ]
    },
    {
      title: "Troubleshooting",
      articles: [
        {
          title: "App crashes or won't open",
          content: "If UseVerdant crashes or won't open: 1) Restart your device, 2) Check if you have the latest app version in the App Store/Google Play, 3) Clear the app cache (Android: Settings > Apps > UseVerdant > Storage > Clear Cache), 4) Restart the app, 5) If issues persist, uninstall and reinstall the app. Contact support if problems continue after trying these steps."
        },
        {
          title: "Camera not working",
          content: "Camera issues can usually be resolved by: 1) Checking that UseVerdant has camera permissions in your device settings, 2) Closing other apps that might be using the camera, 3) Restarting the UseVerdant app, 4) Ensuring your camera lens is clean, 5) Trying the alternative camera mode in app settings. If issues persist, try using the 'Upload Photo' option instead of live camera."
        },
        {
          title: "Sync issues",
          content: "If your scan history isn't syncing across devices: 1) Ensure you're logged into the same account on all devices, 2) Check your internet connection, 3) Try logging out and back in, 4) Force close and reopen the app, 5) Check if automatic sync is enabled in Settings. Manual sync can be triggered by pulling down on the scan history screen."
        },
        {
          title: "Performance problems",
          content: "To improve UseVerdant's performance: 1) Close other apps running in the background, 2) Ensure you have adequate storage space (at least 500MB free), 3) Update to the latest app version, 4) Restart your device regularly, 5) Clear app cache if on Android, 6) Check your internet connection speed. The app works best with iOS 14+ or Android 9+ and at least 3GB RAM."
        }
      ]
    }
  ];

  const toggleTopic = (index: number) => {
    setExpandedTopic(expandedTopic === index ? null : index);
    setExpandedArticle(null); // Close any open articles when switching topics
  };

  const toggleArticle = (articleTitle: string) => {
    setExpandedArticle(expandedArticle === articleTitle ? null : articleTitle);
  };

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
          
          <div className="space-y-4">
            {helpTopics.map((topic, index) => (
              <div key={index} className="border border-border/50 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleTopic(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold">{topic.title}</h3>
                  {expandedTopic === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                
                {expandedTopic === index && (
                  <div className="border-t border-border/50">
                    {topic.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="border-b border-border/30 last:border-b-0">
                        <button
                          onClick={() => toggleArticle(article.title)}
                          className="w-full p-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                        >
                          <span className="text-muted-foreground hover:text-primary transition-colors">
                            {article.title}
                          </span>
                          {expandedArticle === article.title ? (
                            <ChevronUp className="w-4 h-4 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                          )}
                        </button>
                        
                        {expandedArticle === article.title && (
                          <div className="px-4 pb-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {article.content}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
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