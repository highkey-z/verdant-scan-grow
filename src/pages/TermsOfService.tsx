import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const TermsOfService = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container-width py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t('Home')}
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gradient mb-6">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: August 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By downloading, installing, or using the UseVerdant application, you agree to be bound by 
                these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
              <p className="text-muted-foreground">
                UseVerdant is a mobile application that uses artificial intelligence to identify plants 
                from photographs. We provide plant identification, care information, and related botanical 
                content to help users learn about the natural world.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate information when creating an account</li>
                <li>Use the app only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Not attempt to reverse engineer or hack the application</li>
                <li>Not use the app to identify plants for consumption without additional verification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Accuracy Disclaimer</h2>
              <p className="text-muted-foreground">
                While UseVerdant strives for high accuracy in plant identification, we cannot guarantee 
                100% accuracy. Users should not rely solely on our app for plant identification, 
                especially for purposes related to consumption, allergies, or medical use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground">
                UseVerdant and its content, including but not limited to text, graphics, logos, and 
                software, are owned by us and protected by copyright and other intellectual property laws. 
                Users retain rights to photos they upload but grant us license to use them for service improvement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                UseVerdant shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages resulting from your use of the application. Our total liability shall not 
                exceed the amount paid by you for our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <p className="text-muted-foreground">
                We may terminate or suspend your account and access to the service at our sole discretion, 
                without prior notice, for conduct that we believe violates these Terms of Service or is 
                harmful to other users, us, or third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify users of significant 
                changes through the app or via email. Continued use of the service after changes constitutes 
                acceptance of new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:useverdantai@gmail.com" className="text-primary hover:underline">
                  useverdantai@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;