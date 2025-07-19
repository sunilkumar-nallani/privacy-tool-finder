import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Search, CheckCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Find the Best 
            <span className="text-primary"> Privacy Tools</span> for You
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Answer a few simple questions and we'll recommend privacy-respecting apps that suit your needs.
          </p>
          
          <Link to="/survey">
            <Button size="lg" className="text-lg px-8 py-6 animate-scale-in">
              <Search className="mr-2 h-5 w-5" />
              Start Survey
            </Button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Privacy-First</h3>
            <p className="text-muted-foreground">
              All recommended tools prioritize your privacy and data protection above everything else.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Search className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Personalized</h3>
            <p className="text-muted-foreground">
              Get recommendations tailored to your technical level, privacy needs, and preferences.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Vetted Tools</h3>
            <p className="text-muted-foreground">
              Every tool is carefully evaluated for security, privacy practices, and user experience.
            </p>
          </Card>
        </div>

        {/* How it Works */}
        <div className="text-center max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Answer Questions</h3>
              <p className="text-sm text-muted-foreground">Tell us about your privacy preferences and technical comfort level</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Get Matched</h3>
              <p className="text-sm text-muted-foreground">Our algorithm finds the best privacy tools for your specific needs</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Start Protecting</h3>
              <p className="text-sm text-muted-foreground">Download and start using your recommended privacy tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;