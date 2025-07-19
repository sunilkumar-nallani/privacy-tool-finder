import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 font-bold text-lg hover:text-primary transition-colors">
            <Shield className="h-6 w-6 text-primary" />
            <span>Privacy Tools</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {location.pathname !== "/about" && (
              <Link to="/about">
                <Button variant="ghost" size="sm">
                  About
                </Button>
              </Link>
            )}
            
            {location.pathname !== "/survey" && location.pathname !== "/results" && (
              <Link to="/survey">
                <Button size="sm">
                  Take Survey
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;