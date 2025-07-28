import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for freelancers just getting started",
    clients: "Up to 3 clients",
    popular: false,
    features: [
      "3 branded client portals",
      "Basic file sharing",
      "Project timeline tracking",
      "Email notifications",
      "5GB storage",
      "Standard support"
    ]
  },
  {
    name: "Professional",
    price: 59,
    description: "For growing freelancers and small agencies",
    clients: "Up to 10 clients",
    popular: true,
    features: [
      "10 branded client portals",
      "Advanced file management",
      "Invoice & payment integration",
      "Custom domain",
      "Design approval workflows", 
      "50GB storage",
      "Priority support",
      "Zapier integrations"
    ]
  },
  {
    name: "Agency",
    price: 99,
    description: "For agencies managing multiple client relationships",
    clients: "Unlimited clients",
    popular: false,
    features: [
      "Unlimited client portals",
      "White-label reseller options",
      "Advanced analytics",
      "Team collaboration tools",
      "API access",
      "500GB storage",
      "24/7 premium support",
      "All integrations included",
      "Custom onboarding"
    ]
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "UX Designer",
    company: "Independent",
    avatar: "SC",
    rating: 5,
    quote: "PortalPro transformed how my clients see my work. I've increased my rates by 40% since switching."
  },
  {
    name: "Marcus Rodriguez",
    role: "Web Developer",
    company: "DevStudio",
    avatar: "MR", 
    rating: 5,
    quote: "My clients love the portal. No more endless email chains or lost files. It's a game-changer."
  },
  {
    name: "Emily Foster",
    role: "Marketing Consultant",
    company: "Foster Marketing",
    avatar: "EF",
    rating: 5,
    quote: "I save at least 6 hours per week per client. The ROI is incredible."
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple Pricing That 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Pays for Itself</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Save 5+ hours per week per client. Even our highest tier costs less than one billable hour.
          </p>
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 mb-16 text-center shadow-card">
          <h3 className="text-2xl font-bold mb-4">Quick ROI Calculator</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5 hours</div>
              <p className="text-muted-foreground">Saved per client/week</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$100/hr</div>
              <p className="text-muted-foreground">Your hourly rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">$2,000</div>
              <p className="text-muted-foreground">Monthly value created</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Even with just 1 client, you save $500/week in billable time vs. our $59 Professional plan
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-card hover:shadow-glow transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-primary text-white scale-105' 
                  : 'bg-gradient-card'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white border-0">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className={`text-2xl ${plan.popular ? 'text-white' : ''}`}>
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <div className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-primary'}`}>
                    ${plan.price}
                  </div>
                  <div className={`text-sm ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    per month
                  </div>
                  <div className={`text-sm font-medium mt-2 ${plan.popular ? 'text-white' : 'text-primary'}`}>
                    {plan.clients}
                  </div>
                </div>
                <CardDescription className={plan.popular ? 'text-white/90' : ''}>
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button 
                  className={`w-full mb-6 ${
                    plan.popular 
                      ? 'bg-white text-primary hover:bg-white/90' 
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                  size="lg"
                >
                  {plan.popular ? (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Start Free Trial
                    </>
                  ) : (
                    'Start Free Trial'
                  )}
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 ${
                        plan.popular ? 'text-white' : 'text-green-500'
                      }`} />
                      <span className={`text-sm ${plan.popular ? 'text-white' : ''}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-12">Loved by Freelancers Worldwide</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card bg-gradient-card">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Money-back guarantee */}
        <div className="text-center bg-gradient-card border border-primary/20 rounded-2xl p-8 shadow-card">
          <h4 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h4>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Try PortalPro risk-free. If you're not completely satisfied within 30 days, 
            we'll refund every penny. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};