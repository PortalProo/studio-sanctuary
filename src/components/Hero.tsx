import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Clock, Zap } from "lucide-react";
import heroImage from "@/assets/hero-portal.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            {/* Social proof badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Save 5+ Hours/Week</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">$1-10M ARR Potential</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Enterprise-Grade</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Build Beautiful
              <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                Client Portals
              </span>
              in Minutes
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Stop juggling Notion, Slack, and Google Drive. Create branded client hubs where 
              your clients can approve designs, pay invoices, and track projects - all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                variant="hero" 
                className="text-lg px-8 py-4 h-auto"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 h-auto bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 justify-center lg:justify-start text-white/80">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm">Loved by 2,500+ freelancers</span>
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="PortalPro Client Portal Interface"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-card animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Design Approved</p>
                  <p className="text-xs text-muted-foreground">2 mins ago</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-card animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">$</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Invoice Paid</p>
                  <p className="text-xs text-muted-foreground">$2,500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};