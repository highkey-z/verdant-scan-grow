import { ArrowLeft, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FeatureRequest = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    featureCategory: "",
    featureTitle: "",
    featureDescription: "",
    importance: "",
    priority: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-email', {
        body: {
          type: 'feature-request',
          ...formData
        }
      });

      if (error) throw error;

      toast({
        title: "Feature request sent!",
        description: "Thank you for your suggestion. We'll review it carefully.",
      });

      setFormData({
        name: "",
        email: "",
        featureCategory: "",
        featureTitle: "",
        featureDescription: "",
        importance: "",
        priority: ""
      });
    } catch (error) {
      console.error('Error sending feature request:', error);
      toast({
        title: "Error",
        description: "Failed to send feature request. Please try again.",
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
            <Lightbulb className="w-8 h-8 text-amber-500" />
            <h1 className="text-4xl font-bold text-gradient">Feature Request</h1>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            Have an idea for a new feature? We'd love to hear it! Your suggestions help us make 
            UseVerdant better for everyone. Share your ideas and help shape the future of our app.
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
              
              <div>
                <label className="block text-sm font-medium mb-2">Feature Category</label>
                <select 
                  name="featureCategory"
                  value={formData.featureCategory}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select category</option>
                  <option value="Plant Identification">Plant Identification</option>
                  <option value="User Interface">User Interface</option>
                  <option value="Plant Care">Plant Care</option>
                  <option value="Social Features">Social Features</option>
                  <option value="Data & Analytics">Data & Analytics</option>
                  <option value="Performance">Performance</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Feature Title</label>
                <input
                  type="text"
                  name="featureTitle"
                  value={formData.featureTitle}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Brief, descriptive title for your feature idea"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Feature Description</label>
                <textarea
                  rows={5}
                  name="featureDescription"
                  value={formData.featureDescription}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Describe your feature idea in detail. What should it do? How would it work?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Why is this feature important?</label>
                <textarea
                  rows={3}
                  name="importance"
                  value={formData.importance}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="How would this feature improve your experience or solve a problem?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Priority Level</label>
                <select 
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select priority</option>
                  <option value="Nice to have">Nice to have</option>
                  <option value="Important">Important</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="hero-button w-full py-3 rounded-lg disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Feature Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureRequest;