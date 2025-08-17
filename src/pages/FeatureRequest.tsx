import { ArrowLeft, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const FeatureRequest = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container-width py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t('Home')}
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8 text-amber-500" />
            <h1 className="text-4xl font-bold text-gradient">Feature Request</h1>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            Have an idea for a new feature? We'd love to hear it! Your suggestions help us make 
            UseVerdant better for everyone. Share your ideas and help shape the future of our app.
          </p>
          
          <div className="nature-card p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Feature Category</label>
                <select className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Select category</option>
                  <option>Plant Identification</option>
                  <option>User Interface</option>
                  <option>Plant Care</option>
                  <option>Social Features</option>
                  <option>Data & Analytics</option>
                  <option>Performance</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Feature Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Brief, descriptive title for your feature idea"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Feature Description</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Describe your feature idea in detail. What should it do? How would it work?"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Why is this feature important?</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="How would this feature improve your experience or solve a problem?"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Priority Level</label>
                <select className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Select priority</option>
                  <option>Nice to have</option>
                  <option>Important</option>
                  <option>Critical</option>
                </select>
              </div>
              
              <button className="hero-button w-full py-3 rounded-lg">
                Submit Feature Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureRequest;