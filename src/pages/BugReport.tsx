import { ArrowLeft, Bug } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BugReport = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    deviceType: "",
    appVersion: "",
    bugSummary: "",
    stepsToReproduce: "",
    expectedBehavior: "",
    actualBehavior: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-email', {
        body: {
          type: 'bug-report',
          ...formData
        }
      });

      if (error) throw error;

      toast({
        title: "Bug report sent!",
        description: "Thank you for reporting this issue. We'll investigate it.",
      });

      setFormData({
        name: "",
        email: "",
        deviceType: "",
        appVersion: "",
        bugSummary: "",
        stepsToReproduce: "",
        expectedBehavior: "",
        actualBehavior: ""
      });
    } catch (error) {
      console.error('Error sending bug report:', error);
      toast({
        title: "Error",
        description: "Failed to send bug report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Device Type</label>
                  <select 
                    name="deviceType"
                    value={formData.deviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select device</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Android Phone">Android Phone</option>
                    <option value="iPad">iPad</option>
                    <option value="Android Tablet">Android Tablet</option>
                    <option value="Web Browser">Web Browser</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">App Version</label>
                  <input
                    type="text"
                    name="appVersion"
                    value={formData.appVersion}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="e.g., 1.2.3"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Bug Summary</label>
                <input
                  type="text"
                  name="bugSummary"
                  value={formData.bugSummary}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Brief description of the issue"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Steps to Reproduce</label>
                <textarea
                  rows={4}
                  name="stepsToReproduce"
                  value={formData.stepsToReproduce}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="1. Open the app&#10;2. Take a photo of a plant&#10;3. Wait for identification&#10;4. Bug occurs..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Expected Behavior</label>
                <textarea
                  rows={3}
                  name="expectedBehavior"
                  value={formData.expectedBehavior}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="What did you expect to happen?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Actual Behavior</label>
                <textarea
                  rows={3}
                  name="actualBehavior"
                  value={formData.actualBehavior}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="What actually happened?"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="hero-button w-full py-3 rounded-lg disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Bug Report"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugReport;