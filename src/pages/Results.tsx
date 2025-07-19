import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { questions, extendedQuestions, tools } from "@/data/survey";
import { Share2, RotateCcw, ExternalLink, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Recommendation {
  tool: typeof tools[string];
  score: number;
  confidence: string;
}

const Results = () => {
  const [searchParams] = useSearchParams();
  const [recommendations, setRecommendations] = useState<{
    browser: Recommendation[];
    messaging: Recommendation[];
    vpn: Recommendation[];
    os: Recommendation[];
  }>({
    browser: [],
    messaging: [],
    vpn: [],
    os: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const calculateRecommendations = () => {
      setIsLoading(true);
      
      // Simulate loading for better UX
      setTimeout(() => {
        const allQuestions = [...questions, ...extendedQuestions];
        const scores: { [key: string]: number } = {};
        
        // Initialize scores
        Object.keys(tools).forEach(tool => {
          scores[tool] = 0;
        });

        // Calculate scores based on answers
        allQuestions.forEach(question => {
          const answerId = searchParams.get(question.id.toString());
          if (answerId) {
            const selectedOption = question.options.find(opt => opt.id === answerId);
            if (selectedOption) {
              Object.entries(selectedOption.weight).forEach(([tool, weight]) => {
                scores[tool] = (scores[tool] || 0) + weight;
              });
            }
          }
        });

        // Organize by category and sort by score
        const browserTools = Object.entries(scores)
          .filter(([toolKey]) => tools[toolKey]?.category === "Browser")
          .map(([toolKey, score]) => ({
            tool: tools[toolKey],
            score,
            confidence: score > 8 ? "High" : score > 5 ? "Medium" : "Low"
          }))
          .sort((a, b) => b.score - a.score);

        const messagingTools = Object.entries(scores)
          .filter(([toolKey]) => tools[toolKey]?.category === "Messaging")
          .map(([toolKey, score]) => ({
            tool: tools[toolKey],
            score,
            confidence: score > 8 ? "High" : score > 5 ? "Medium" : "Low"
          }))
          .sort((a, b) => b.score - a.score);

        const vpnTools = Object.entries(scores)
          .filter(([toolKey]) => tools[toolKey]?.category === "VPN")
          .map(([toolKey, score]) => ({
            tool: tools[toolKey],
            score,
            confidence: score > 8 ? "High" : score > 5 ? "Medium" : "Low"
          }))
          .sort((a, b) => b.score - a.score);

        const osTools = Object.entries(scores)
          .filter(([toolKey]) => tools[toolKey]?.category === "Operating System")
          .map(([toolKey, score]) => ({
            tool: tools[toolKey],
            score,
            confidence: score > 8 ? "High" : score > 5 ? "Medium" : "Low"
          }))
          .sort((a, b) => b.score - a.score);

        setRecommendations({
          browser: browserTools,
          messaging: messagingTools,
          vpn: vpnTools,
          os: osTools
        });
        
        setIsLoading(false);
      }, 1000);
    };

    calculateRecommendations();
  }, [searchParams]);

  const shareResults = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Privacy Tools Recommendations",
          text: "Check out these privacy tool recommendations!",
          url: url,
        });
      } catch (err) {
        // Fallback to clipboard
        await navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "Share link has been copied to your clipboard.",
        });
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "Share link has been copied to your clipboard.",
      });
    }
  };

  const getConfidenceBadgeVariant = (confidence: string) => {
    switch (confidence) {
      case "High": return "default";
      case "Medium": return "secondary";
      case "Low": return "outline";
      default: return "outline";
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <Card className="p-8 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">Analyzing your preferences...</h2>
          <p className="text-muted-foreground">Finding the perfect privacy tools for you</p>
        </Card>
      </div>
    );
  }

  const CategorySection = ({ title, tools, icon }: { title: string; tools: Recommendation[]; icon: string }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="mr-3 text-3xl">{icon}</span>
        {title}
      </h2>
      <div className="space-y-4">
        {tools.slice(0, 3).map((rec, index) => (
          <Card key={rec.tool.name} className={`p-6 transition-all duration-300 hover:shadow-lg ${index === 0 ? 'border-primary/50 bg-primary/5' : ''}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{rec.tool.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold flex items-center space-x-2">
                    <span>{rec.tool.name}</span>
                    {index === 0 && <Badge variant="default" className="text-xs">Top Pick</Badge>}
                    <Badge variant={getConfidenceBadgeVariant(rec.confidence)} className="text-xs">
                      {rec.confidence} Match
                    </Badge>
                  </h3>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {rec.tool.description}
            </p>
            <Button asChild variant={index === 0 ? "default" : "secondary"} className="w-full sm:w-auto">
              <a href={rec.tool.website} target="_blank" rel="noopener noreferrer">
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Your Privacy Tool Recommendations
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Based on your preferences, here are the best privacy tools for you
            </p>
          </div>

          {/* Recommendations */}
          <div className="animate-slide-in-right">
            <CategorySection 
              title="Recommended Browser"
              tools={recommendations.browser}
              icon="🌐"
            />
            
            <CategorySection 
              title="Messaging App"
              tools={recommendations.messaging}
              icon="💬"
            />
            
            <CategorySection 
              title="VPN Service"
              tools={recommendations.vpn}
              icon="🛡️"
            />
            
            <CategorySection 
              title="Operating System"
              tools={recommendations.os}
              icon="💻"
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 pt-8 border-t border-border">
            <Link to="/survey">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <RotateCcw className="mr-2 h-4 w-4" />
                Restart Survey
              </Button>
            </Link>
            
            <Button onClick={shareResults} size="lg" className="w-full sm:w-auto">
              <Share2 className="mr-2 h-4 w-4" />
              Share Results
            </Button>
          </div>

          {/* Footer Info */}
          <div className="text-center mt-12 p-6 bg-card rounded-lg border">
            <h3 className="font-semibold mb-2">Why These Recommendations?</h3>
            <p className="text-sm text-muted-foreground">
              Our recommendations are based on your privacy preferences, technical comfort level, 
              and usage patterns. All suggested tools are independently evaluated for their 
              privacy practices, security features, and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;