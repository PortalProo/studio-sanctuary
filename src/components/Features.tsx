import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  FileText, 
  Calendar, 
  CreditCard, 
  Users, 
  Zap,
  CheckCircle,
  Clock,
  Sparkles
} from "lucide-react";
import integrationFlow from "@/assets/integration-flow.jpg";

const features = [
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Your colors, logo, and domain. Make every portal look like your brand.",
    highlight: "White-label ready"
  },
  {
    icon: FileText,
    title: "File Management",
    description: "Organized file sharing with version control and approval workflows.",
    highlight: "Version control"
  },
  {
    icon: Calendar,
    title: "Project Timelines",
    description: "Visual project tracking with milestones and automated updates.",
    highlight: "Auto-updates"
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Seamless invoice creation and payment processing in one place.",
    highlight: "Instant payments"
  },
  {
    icon: Users,
    title: "Client Collaboration",
    description: "Comments, feedback, and approvals without endless email chains.",
    highlight: "No more emails"
  },
  {
    icon: Zap,
    title: "Tool Integrations",
    description: "Connect Notion, Slack, Zapier, and 50+ tools you already use.",
    highlight: "50+ integrations"
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Save 5+ Hours Weekly",
    description: "Eliminate context switching between tools"
  },
  {
    icon: Sparkles,
    title: "Look Enterprise-Grade",
    description: "Professional experience that justifies premium rates"
  },
  {
    icon: CheckCircle,
    title: "Increase Client Retention",
    description: "Better experience leads to longer retainers"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Scale Your Practice</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform scattered communications into a premium client experience that rivals big agencies
          </p>
        </div>

        {/* Before/After Problem Statement */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-700 mb-6">Before PortalPro</h3>
            <ul className="space-y-4 text-red-600">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>Clients confused by scattered tools and emails</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>Hours wasted on project management overhead</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>Looking amateur despite professional work</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>Lost files and missed deadlines</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-primary mb-6">After PortalPro</h3>
            <ul className="space-y-4 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>One beautiful portal for all client interactions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>5+ hours saved per week, per client</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Enterprise-grade experience on any budget</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Higher rates and longer client relationships</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-card bg-gradient-card hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {feature.highlight}
                  </div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Connect Your Existing Workflow
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              PortalPro doesn't replace your tools - it unifies them. Connect through Zapier, 
              native APIs, and direct integrations to create a seamless experience.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Notion for project documentation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Slack for team communications</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Stripe for payment processing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Google Drive for file storage</span>
              </div>
            </div>
            <Button variant="gradient" size="lg">
              View All Integrations
            </Button>
          </div>
          <div className="relative">
            <img 
              src={integrationFlow} 
              alt="Tool Integration Flow"
              className="w-full h-auto rounded-2xl shadow-card"
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};