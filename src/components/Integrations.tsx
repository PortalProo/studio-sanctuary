import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Slack, 
  FileText, 
  CreditCard, 
  Calendar,
  Mail,
  Database,
  Zap,
  Cloud,
  Users,
  Smartphone
} from "lucide-react";

const integrations = [
  {
    name: "Slack",
    icon: Slack,
    description: "Sync project updates and notifications",
    category: "Communication"
  },
  {
    name: "Notion",
    icon: FileText,
    description: "Import project docs and databases",
    category: "Documentation"
  },
  {
    name: "Stripe",
    icon: CreditCard,
    description: "Process payments and manage invoices",
    category: "Payments"
  },
  {
    name: "Google Calendar",
    icon: Calendar,
    description: "Sync deadlines and meetings",
    category: "Scheduling"
  },
  {
    name: "Mailchimp",
    icon: Mail,
    description: "Automated client email sequences",
    category: "Email"
  },
  {
    name: "Airtable",
    icon: Database,
    description: "Import client and project data",
    category: "Database"
  },
  {
    name: "Zapier",
    icon: Zap,
    description: "Connect 5,000+ apps automatically",
    category: "Automation"
  },
  {
    name: "Google Drive",
    icon: Cloud,
    description: "Seamless file sync and storage",
    category: "Storage"
  },
  {
    name: "Zoom",
    icon: Users,
    description: "Schedule and embed meeting links",
    category: "Video"
  },
  {
    name: "SMS",
    icon: Smartphone,
    description: "Client notifications via text",
    category: "Mobile"
  }
];

const categories = ["All", "Communication", "Payments", "Documentation", "Automation"];

export const Integrations = () => {
  return (
    <section className="py-24 bg-background" id="integrations">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Connects with 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Everything You Use</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            PortalPro doesn't replace your workflow - it unifies it. Connect your existing tools 
            to create a seamless client experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">Native Integrations</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
            <p className="text-muted-foreground">Zapier Connections</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2 min</div>
            <p className="text-muted-foreground">Average Setup Time</p>
          </div>
        </div>

        {/* Integration Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <Card key={index} className="border-0 shadow-card bg-gradient-card hover:shadow-glow transition-all duration-300 group text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{integration.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{integration.description}</p>
                <div className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full inline-block">
                  {integration.category}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* API Section */}
        <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 shadow-card text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Integration?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Use our REST API to build custom integrations or connect proprietary tools. 
            Full documentation and developer support included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="border-0 bg-primary/5 p-4 text-left">
              <CardContent className="p-0">
                <code className="text-sm text-primary">
                  POST /api/v1/portals/{`{portal_id}`}/files
                </code>
              </CardContent>
            </Card>
            <Card className="border-0 bg-primary/5 p-4 text-left">
              <CardContent className="p-0">
                <code className="text-sm text-primary">
                  GET /api/v1/clients/{`{client_id}`}/projects
                </code>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};