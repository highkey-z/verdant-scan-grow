import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const CookiePolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container-width py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t('Home')}
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gradient mb-6">Cookie Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: December 2024</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are placed on your device when you visit our website or 
                use our mobile application. They help us provide you with a better experience by remembering 
                your preferences and understanding how you use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-lg font-medium mb-2">Essential Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies are necessary for the basic functionality of our app and cannot be disabled. 
                They include authentication tokens and security features.
              </p>
              
              <h3 className="text-lg font-medium mb-2">Performance Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These help us understand how users interact with our app by collecting anonymous usage data. 
                This helps us improve our services and user experience.
              </p>
              
              <h3 className="text-lg font-medium mb-2">Functional Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These remember your preferences and settings, such as language selection and theme preferences, 
                to provide you with a more personalized experience.
              </p>
              
              <h3 className="text-lg font-medium mb-2">Analytics Cookies</h3>
              <p className="text-muted-foreground">
                We use analytics cookies to understand user behavior and improve our plant identification 
                algorithms and overall app performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We may use third-party services that place cookies on your device:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Google Analytics - for usage analytics</li>
                <li>Firebase - for app performance monitoring</li>
                <li>Cloud storage providers - for data synchronization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Through your browser settings (for web version)</li>
                <li>Through your device settings (for mobile app)</li>
                <li>By opting out of specific analytics services</li>
                <li>By contacting us directly for assistance</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Please note that disabling certain cookies may affect the functionality of our app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookie Retention</h2>
              <p className="text-muted-foreground">
                Different types of cookies are stored for different periods:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Session cookies - deleted when you close the app</li>
                <li>Persistent cookies - stored for up to 2 years</li>
                <li>Analytics cookies - stored for up to 2 years</li>
                <li>Authentication cookies - stored until you log out</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time. We will notify you of any significant 
                changes by posting the new policy on this page and updating the "last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Cookie Policy, please contact us at{" "}
                <a href="mailto:privacy@useverdantai.com" className="text-primary hover:underline">
                  privacy@useverdantai.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;