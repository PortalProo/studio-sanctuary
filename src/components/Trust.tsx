import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Award, 
  Lock, 
  CheckCircle, 
  Zap,
  Globe,
  Users,
  HeadphonesIcon
} from "lucide-react";

const trustBadges = [
  {
    icon: Shield,
    title: "SOC 2 Compliant",
    description: "Enterprise security standards"
  },
  {
    icon: Lock,
    title: "SSL Encrypted",
    description: "Bank-level data protection"
  },
  {
    icon: Award,
    title: "99.9% Uptime",
    description: "Reliable, always available"
  },
  {
    icon: Globe,
    title: "GDPR Ready",
    description: "Privacy law compliant"
  }
];

const stats = [
  {
    number: "2,500+",
    label: "Active Freelancers",
    icon: Users
  },
  {
    number: "50,000+",
    label: "Client Portals Created",
    icon: Zap
  },
  {
    number: "98%",
    label: "Customer Satisfaction",
    icon: HeadphonesIcon
  },
  {
    number: "4.8/5",
    label: "Average Rating",
    icon: Award
  }
];

export const Trust = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Professionals Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of freelancers who've transformed their client relationships with PortalPro
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {trustBadges.map((badge, index) => (
            <Card key={index} className="border-0 shadow-card bg-gradient-card text-center">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Success Stories */}
        <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 shadow-card">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
                Success Story
              </Badge>
              <h3 className="text-3xl font-bold mb-6">
                "PortalPro helped me scale from $50K to $200K ARR"
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  "Before PortalPro, I was spending 2-3 hours per week on project management 
                  for each client. Now it's completely automated."
                </p>
                <p>
                  "My clients love the professional experience, and I've been able to 
                  increase my rates by 40% while improving client retention."
                </p>
                <p>
                  "The time savings alone paid for PortalPro 10x over. But the real value 
                  is in the premium experience that justifies higher prices."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                  JD
                </div>
                <div>
                  <div className="font-semibold">Jessica Davis</div>
                  <div className="text-sm text-muted-foreground">Brand Designer, $200K ARR</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold">Time Savings</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Reduced project management from 3 hours to 30 minutes per client per week
                </p>
              </div>
              
              <div className="bg-white/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold">Rate Increase</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Increased hourly rate from $75 to $105 due to premium client experience
                </p>
              </div>
              
              <div className="bg-white/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold">Client Retention</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Client retention improved from 60% to 90% year-over-year
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Them?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your free trial today and see why thousands of freelancers choose PortalPro 
            to scale their businesses.
          </p>
          <Button variant="gradient" size="lg" className="text-lg px-8 py-4 h-auto">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};