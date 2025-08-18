import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const GDPR = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container-width py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t('Home')}
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gradient mb-6">GDPR Compliance</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: August 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">General Data Protection Regulation</h2>
              <p className="text-muted-foreground">
                UseVerdant is committed to protecting the privacy and personal data of all users, including 
                those in the European Union. This page outlines how we comply with the General Data Protection 
                Regulation (GDPR) and your rights under this regulation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Legal Basis for Processing</h2>
              <p className="text-muted-foreground mb-4">
                We process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Consent:</strong> When you give us explicit consent to process your data</li>
                <li><strong>Contract:</strong> To provide our plant identification services</li>
                <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights Under GDPR</h2>
              
              <h3 className="text-lg font-medium mb-2">Right to Access</h3>
              <p className="text-muted-foreground mb-4">
                You have the right to request a copy of all personal data we hold about you.
              </p>
              
              <h3 className="text-lg font-medium mb-2">Right to Rectification</h3>
              <p className="text-muted-foreground mb-4">
                You can request that we correct any inaccurate or incomplete personal data.
              </p>
              
              <h3 className="text-lg font-medium mb-2">Right to Erasure</h3>
              <p className="text-muted-foreground mb-4">
                You can request that we delete your personal data under certain circumstances.
              </p>
              
              <h3 className="text-lg font-medium mb-2">Right to Restrict Processing</h3>
              <p className="text-muted-foreground mb-4">
                You can request that we limit how we use your personal data.
              </p>
              
              <h3 className="text-lg font-medium mb-2">Right to Data Portability</h3>
              <p className="text-muted-foreground mb-4">
                You can request a copy of your data in a machine-readable format.
              </p>
              
              <h3 className="text-lg font-medium mb-2">Right to Object</h3>
              <p className="text-muted-foreground">
                You can object to certain types of processing, including marketing communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Protection Officer</h2>
              <p className="text-muted-foreground">
                For GDPR-related inquiries, please contact our Data Protection Officer at{" "}
                <a href="mailto:useverdantai@gmail.com" className="text-primary hover:underline">
                  useverdantai@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain personal data only as long as necessary for the purposes outlined in our 
                Privacy Policy:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Account data - until account deletion</li>
                <li>Scan history - 3 years or until deletion request</li>
                <li>Analytics data - 2 years (anonymized)</li>
                <li>Support communications - 3 years</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
              <p className="text-muted-foreground">
                When we transfer personal data outside the EU, we ensure appropriate safeguards are in place, 
                including Standard Contractual Clauses and adequacy decisions by the European Commission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How to Exercise Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                To exercise any of your GDPR rights, please contact us through:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Email: <a href="mailto:useverdantai@gmail.com" className="text-primary hover:underline">useverdantai@gmail.com</a></li>
                <li>In-app settings (for some requests)</li>
                <li>Written request to our Farmingdale, NY office</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We will respond to your request within 30 days. In some cases, we may need to verify 
                your identity before processing your request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Complaints</h2>
              <p className="text-muted-foreground">
                If you believe we have not complied with GDPR requirements, you have the right to lodge 
                a complaint with your local data protection authority or the supervisory authority in your EU country.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPR;