import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How accurate is UseVerdant's plant identification?",
      answer: "UseVerdant uses advanced AI and machine learning algorithms with a database of over 400,000 plant species. Our identification accuracy is over 95% for common plants and continuously improving through machine learning and user feedback."
    },
    {
      question: "Does UseVerdant work offline?",
      answer: "Yes! You can use UseVerdant offline for basic plant identification. The app stores essential data locally on your device. For the most comprehensive results and latest database updates, an internet connection is recommended."
    },
    {
      question: "Is UseVerdant free to use?",
      answer: "UseVerdant offers a free version with basic plant identification features. Premium features like detailed care guides, plant health diagnosis, and unlimited identifications are available through our subscription plans starting at $2.99/month."
    },
    {
      question: "What types of plants can UseVerdant identify?",
      answer: "UseVerdant can identify a wide variety of plants including flowers, trees, shrubs, houseplants, succulents, herbs, vegetables, weeds, and many wild plants. Our database covers plants from all continents and climate zones."
    },
    {
      question: "How do I take the best photo for plant identification?",
      answer: "For best results: 1) Take photos in good lighting, 2) Include leaves, flowers, or fruits in the frame, 3) Keep the plant in focus, 4) Take multiple photos from different angles, 5) Avoid shadows or reflections on the plant."
    },
    {
      question: "Can UseVerdant help with plant diseases?",
      answer: "Yes! Our premium version includes plant health diagnosis that can identify common diseases, pests, and nutrient deficiencies. The app provides treatment recommendations and prevention tips for healthier plants."
    },
    {
      question: "Does UseVerdant provide plant care instructions?",
      answer: "Absolutely! After identifying a plant, UseVerdant provides detailed care guides including watering schedules, sunlight requirements, soil preferences, fertilization tips, and seasonal care instructions tailored to your location."
    },
    {
      question: "Can I save and organize my plant identifications?",
      answer: "Yes! Create your personal plant collection by saving identified plants. You can add notes, set care reminders, track growth progress, and organize plants by location (garden, indoor, greenhouse, etc.)."
    },
    {
      question: "Is my data and photos secure?",
      answer: "We take privacy seriously. Your photos are processed securely and are not shared with third parties. You can delete your data anytime. We comply with GDPR and other privacy regulations to protect your information."
    },
    {
      question: "What if UseVerdant can't identify my plant?",
      answer: "If our AI can't identify your plant, you can submit it to our expert botanists for manual identification (premium feature). We also have a community forum where fellow plant enthusiasts can help with difficult identifications."
    },
    {
      question: "Does UseVerdant work for plants from all countries?",
      answer: "Yes! Our database includes plants from around the world. The app works globally and can identify both native and non-native species. Regional expertise is strongest in North America, Europe, and Australia."
    },
    {
      question: "Can I use UseVerdant for commercial purposes?",
      answer: "Individual and educational use is covered by our standard license. For commercial use such as landscaping businesses, botanical surveys, or agricultural applications, please contact us for enterprise licensing options."
    },
    {
      question: "How often is the plant database updated?",
      answer: "Our plant database is continuously updated with new species, improved photos, and enhanced care information. Major updates are released monthly, with minor improvements happening weekly."
    },
    {
      question: "Can UseVerdant identify poisonous plants?",
      answer: "Yes, UseVerdant can identify many poisonous and toxic plants and will clearly mark them with warning labels. However, always consult with experts before consuming any plant, as identification should not be the sole basis for determining edibility."
    },
    {
      question: "Does UseVerdant have a community feature?",
      answer: "Yes! Join our growing community of plant lovers. Share your discoveries, ask questions, participate in plant challenges, and learn from experienced gardeners and botanists from around the world."
    },
    {
      question: "What devices and operating systems support UseVerdant?",
      answer: "UseVerdant is available for iOS (iPhone and iPad) running iOS 13+ and Android devices running Android 7.0+. We also offer a web version with limited features for desktop users."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our support team through the in-app help center, email us at help@useverdant.com, or use the contact form on our website. Our team typically responds within 24 hours."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time through your device's app store settings or your account dashboard. You'll continue to have premium access until the end of your current billing period."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="section-padding bg-gradient-to-br from-background via-nature-mint/5 to-background">
        <div className="container-width">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about UseVerdant and plant identification
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="nature-card overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-ring rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="nature-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Still Have <span className="text-gradient">Questions?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our support team is here to help you with any questions about UseVerdant.
              </p>
              <button className="hero-button px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;