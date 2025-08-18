import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  type: 'contact' | 'bug-report' | 'feature-request';
  name: string;
  email: string;
  subject?: string;
  message?: string;
  // Bug report specific fields
  deviceType?: string;
  appVersion?: string;
  bugSummary?: string;
  stepsToReproduce?: string;
  expectedBehavior?: string;
  actualBehavior?: string;
  // Feature request specific fields
  featureCategory?: string;
  featureTitle?: string;
  featureDescription?: string;
  importance?: string;
  priority?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const emailData: EmailRequest = await req.json();
    console.log("Received email request:", emailData.type);

    let emailSubject = "";
    let emailHtml = "";

    switch (emailData.type) {
      case 'contact':
        emailSubject = `Contact Form: ${emailData.subject || 'New Message'}`;
        emailHtml = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${emailData.name}</p>
          <p><strong>Email:</strong> ${emailData.email}</p>
          <p><strong>Subject:</strong> ${emailData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${emailData.message?.replace(/\n/g, '<br>')}</p>
        `;
        break;

      case 'bug-report':
        emailSubject = `Bug Report: ${emailData.bugSummary || 'New Bug Report'}`;
        emailHtml = `
          <h2>New Bug Report</h2>
          <p><strong>Name:</strong> ${emailData.name}</p>
          <p><strong>Email:</strong> ${emailData.email}</p>
          <p><strong>Device Type:</strong> ${emailData.deviceType}</p>
          <p><strong>App Version:</strong> ${emailData.appVersion}</p>
          <p><strong>Bug Summary:</strong> ${emailData.bugSummary}</p>
          <p><strong>Steps to Reproduce:</strong></p>
          <p>${emailData.stepsToReproduce?.replace(/\n/g, '<br>')}</p>
          <p><strong>Expected Behavior:</strong></p>
          <p>${emailData.expectedBehavior?.replace(/\n/g, '<br>')}</p>
          <p><strong>Actual Behavior:</strong></p>
          <p>${emailData.actualBehavior?.replace(/\n/g, '<br>')}</p>
        `;
        break;

      case 'feature-request':
        emailSubject = `Feature Request: ${emailData.featureTitle || 'New Feature Request'}`;
        emailHtml = `
          <h2>New Feature Request</h2>
          <p><strong>Name:</strong> ${emailData.name}</p>
          <p><strong>Email:</strong> ${emailData.email}</p>
          <p><strong>Category:</strong> ${emailData.featureCategory}</p>
          <p><strong>Feature Title:</strong> ${emailData.featureTitle}</p>
          <p><strong>Description:</strong></p>
          <p>${emailData.featureDescription?.replace(/\n/g, '<br>')}</p>
          <p><strong>Importance:</strong></p>
          <p>${emailData.importance?.replace(/\n/g, '<br>')}</p>
          <p><strong>Priority:</strong> ${emailData.priority}</p>
        `;
        break;

      default:
        throw new Error(`Unknown email type: ${emailData.type}`);
    }

    console.log("Attempting to send email with API key:", Deno.env.get("RESEND_API_KEY") ? "Key exists" : "Key missing");
    
    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["useverdantai@gmail.com"],
      subject: emailSubject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);