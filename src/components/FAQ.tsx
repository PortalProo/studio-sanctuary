import { Card, CardContent } from "@/components/ui/card";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How quickly can I set up my first client portal?",
    answer: "Most freelancers have their first portal live in under 10 minutes. Choose a template, upload your logo, customize colors, and invite your client. No coding required."
  },
  {
    question: "Can I use my own domain name?",
    answer: "Yes! Professional and Agency plans include custom domain support. Your portals can live at portal.yourbusiness.com or any subdomain you prefer."
  },
  {
    question: "What file types and sizes are supported?",
    answer: "All common file types are supported including images, videos, documents, and design files. File size limits range from 100MB (Starter) to 2GB (Agency) per upload."
  },
  {
    question: "How does billing work for multiple clients?",
    answer: "Plans are based on active client portals, not individual projects. One client can have multiple projects within their portal. Billing automatically adjusts as you add or remove clients."
  },
  {
    question: "Is my client data secure?",
    answer: "Absolutely. We use enterprise-grade security with SSL encryption, SOC 2 compliance, and regular security audits. Your data is hosted on secure AWS servers with automatic backups."
  },
  {
    question: "Can clients access portals on mobile devices?",
    answer: "Yes! All portals are fully responsive and work perfectly on phones and tablets. Clients can approve designs, view files, and make payments from anywhere."
  },
  {
    question: "What happens if I need to cancel?",
    answer: "You can cancel anytime. Your portals remain active until the end of your billing period, and you can export all data. We also offer a 30-day money-back guarantee."
  },
  {
    question: "Do you offer phone or chat support?",
    answer: "Professional plans include priority email support with 4-hour response times. Agency plans get access to phone support and dedicated onboarding assistance."
  },
  {
    question: "Can I white-label PortalPro for my agency?",
    answer: "Yes! Agency plans include white-label options. Remove all PortalPro branding and present the platform as your own solution to clients."
  },
  {
    question: "How do integrations work with my existing tools?",
    answer: "Most integrations connect via API or Zapier webhooks. Popular tools like Notion, Slack, and Stripe have one-click setup. Custom integrations are possible with our API."
  }
];

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-muted/30" id="faq">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-4xl lg:text-5xl font-bold">
              Frequently Asked 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Questions</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Can't find what you're looking for? 
            Reach out to our support team.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-card bg-gradient-card">
                <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                  <CollapsibleTrigger className="w-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between text-left">
                        <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                        <ChevronDown 
                          className={`w-5 h-5 text-primary transition-transform duration-200 flex-shrink-0 ${
                            openItems.includes(index) ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0 pb-6 px-6">
                      <div className="border-t border-border pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you succeed. Get in touch and we'll respond within 4 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@portalpro.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Email Support
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
              >
                Schedule Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};