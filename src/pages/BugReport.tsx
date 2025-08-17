import { ArrowLeft, Bug } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const BugReport = () => {
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
            <Bug className="w-8 h-8 text-destructive" />
            <h1 className="text-4xl font-bold text-gradient">Report a Bug</h1>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            Help us improve UseVerdant by reporting any bugs or issues you encounter. 
            We appreciate your feedback and will work to fix issues as quickly as possible.
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Device Type</label>
                  <select className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Select device</option>
                    <option>iPhone</option>
                    <option>Android Phone</option>
                    <option>iPad</option>
                    <option>Android Tablet</option>
                    <option>Web Browser</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">App Version</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="e.g., 1.2.3"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Bug Summary</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Brief description of the issue"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Steps to Reproduce</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="1. Open the app&#10;2. Take a photo of a plant&#10;3. Wait for identification&#10;4. Bug occurs..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Expected Behavior</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="What did you expect to happen?"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Actual Behavior</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="What actually happened?"
                ></textarea>
              </div>
              
              <button className="hero-button w-full py-3 rounded-lg">
                Submit Bug Report
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugReport;