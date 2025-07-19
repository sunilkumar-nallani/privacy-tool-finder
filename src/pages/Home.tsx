import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Search, CheckCircle, Sparkles, Zap, Globe } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-5xl mx-auto mb-20 animate-blur-in">
          <div className="flex justify-center mb-8 relative">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl glass-effect hover-glow group">
              <Shield className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1">
                <Sparkles className="h-6 w-6 text-accent animate-pulse-glow" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Find the Best{' '}
            <span className="text-gradient animate-shimmer bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]">
              Privacy Tools
            </span>
            {' '}for You
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Answer a few simple questions and we'll recommend privacy-respecting apps that suit your needs perfectly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/survey">
              <Button size="lg" className="text-lg px-10 py-7 rounded-2xl hover-glow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Search className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Start Privacy Survey
                <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-7 rounded-2xl glass-effect hover-glow">
              <Globe className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-8 mt-16 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Privacy Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Curated Tools</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-slide-up">
          <Card className="p-8 text-center glass-effect hover-glow group border-0 bg-card/50 backdrop-blur-sm">
            <div className="flex justify-center mb-6 relative">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:scale-110 transition-all duration-500">
                <Shield className="h-10 w-10 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full animate-pulse-glow" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Privacy-First</h3>
            <p className="text-muted-foreground leading-relaxed">
              All recommended tools prioritize your privacy and data protection above everything else. No compromises.
            </p>
          </Card>

          <Card className="p-8 text-center glass-effect hover-glow group border-0 bg-card/50 backdrop-blur-sm">
            <div className="flex justify-center mb-6 relative">
              <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl group-hover:scale-110 transition-all duration-500">
                <Search className="h-10 w-10 text-accent group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent/20 rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Personalized</h3>
            <p className="text-muted-foreground leading-relaxed">
              Get recommendations tailored to your technical level, privacy needs, and personal preferences.
            </p>
          </Card>

          <Card className="p-8 text-center glass-effect hover-glow group border-0 bg-card/50 backdrop-blur-sm">
            <div className="flex justify-center mb-6 relative">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl group-hover:scale-110 transition-all duration-500">
                <CheckCircle className="h-10 w-10 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Vetted Tools</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every tool is carefully evaluated for security, privacy practices, and exceptional user experience.
            </p>
          </Card>
        </div>

        {/* How it Works */}
        <div className="text-center max-w-4xl mx-auto mt-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6 animate-bounce-in">
            <Sparkles className="h-4 w-4" />
            <span>Simple Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gradient">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/30 to-accent/30" />
            
            <div className="flex flex-col items-center group animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                  1
                </div>
                <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50" />
              </div>
              <h3 className="text-xl font-bold mb-3">Answer Questions</h3>
              <p className="text-muted-foreground leading-relaxed">Tell us about your privacy preferences and technical comfort level in just 2 minutes</p>
            </div>
            
            <div className="flex flex-col items-center group animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-2xl flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                  2
                </div>
                <div className="absolute -inset-2 bg-accent/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50" />
              </div>
              <h3 className="text-xl font-bold mb-3">Get Matched</h3>
              <p className="text-muted-foreground leading-relaxed">Our intelligent algorithm finds the perfect privacy tools for your specific needs</p>
            </div>
            
            <div className="flex flex-col items-center group animate-bounce-in" style={{ animationDelay: '0.6s' }}>
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                  3
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-50" />
              </div>
              <h3 className="text-xl font-bold mb-3">Start Protecting</h3>
              <p className="text-muted-foreground leading-relaxed">Download and start using your personalized privacy tools instantly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;